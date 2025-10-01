type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (nextPage: number) => void;
  siblingCount?: number;
  className?: string;
  prevLabel?: string;
  nextLabel?: string;
  disabled?: boolean;
};

function createRange(start: number, end: number) {
  const range: number[] = [];
  for (let i = start; i <= end; i += 1) range.push(i);
  return range;
}

function getPaginationRange(
  page: number,
  totalPages: number,
  siblingCount: number
): (number | '…')[] {
  const totalNumbers = siblingCount * 2 + 5;
  if (totalPages <= totalNumbers) return createRange(1, totalPages);

  const leftSibling = Math.max(page - siblingCount, 1);
  const rightSibling = Math.min(page + siblingCount, totalPages);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftRange = createRange(1, 3 + siblingCount * 2);
    return [...leftRange, '…', totalPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightRange = createRange(
      totalPages - (2 + siblingCount * 2),
      totalPages
    );
    return [1, '…', ...rightRange];
  }

  return [1, '…', ...createRange(leftSibling, rightSibling), '…', totalPages];
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
  prevLabel = '이전',
  nextLabel = '다음',
  disabled = false,
}: PaginationProps) {
  const canPrev = !disabled && page > 1;
  const canNext = !disabled && page < totalPages;
  const range = getPaginationRange(page, totalPages, siblingCount);

  if (totalPages <= 1) return null;

  return (
    <nav className={className} aria-label="Pagination">
      <ul className="flex items-center gap-4">
        <li>
          <button
            type="button"
            className="h-10 min-w-16 px-4 rounded-xl border border-gray-200 text-gray-700 text-base disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
            onClick={() => canPrev && onPageChange(page - 1)}
            disabled={!canPrev}
            aria-label="Previous page"
          >
            {prevLabel}
          </button>
        </li>

        {range.map((item, idx) => {
          if (item === '…') {
            return (
              <li
                key={`ellipsis-${idx}`}
                className="px-2 select-none text-gray-500"
              >
                …
              </li>
            );
          }

          const pageNumber = item as number;
          const isActive = pageNumber === page;
          return (
            <li key={pageNumber}>
              <button
                type="button"
                className={
                  `h-10 w-10 rounded-xl border text-base ` +
                  (isActive
                    ? 'border-gray-300 bg-white text-gray-900 ring-2 ring-gray-200'
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50')
                }
                onClick={() => onPageChange(pageNumber)}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Page ${pageNumber}`}
                disabled={disabled}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        <li>
          <button
            type="button"
            className="h-10 min-w-16 px-4 rounded-xl border border-gray-200 text-gray-700 text-base disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
            onClick={() => canNext && onPageChange(page + 1)}
            disabled={!canNext}
            aria-label="Next page"
          >
            {nextLabel}
          </button>
        </li>
      </ul>
    </nav>
  );
}
