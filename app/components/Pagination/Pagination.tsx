import {
  PageNumbersContainer,
  Wrapper,
} from './styles';
import {Button} from '@/app/components/Button';
import {ButtonVariants} from '@/app/components/Button/types';

type PaginationTypes = {
  currentPage: number,
  totalPages: number,
  pages: Record<number, string>,
}

export const Pagination = (
  {
    currentPage,
    totalPages,
    pages,
  }: PaginationTypes
) => {
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  let previousPageButtonText = '<';
  let nextPageButtonText = '>';

  const paginationOffset = 2;

  const previousPageLink = currentPage > 1
    ? pages[currentPage - 1]
    : pages[currentPage];
  const nextPageLink = currentPage < totalPages
    ? pages[currentPage + 1]
    : pages[currentPage];

  const minPage = currentPage - paginationOffset < 1
    ? 1
    : currentPage - paginationOffset;
  const maxPage = currentPage + paginationOffset > totalPages
    ? totalPages
    : currentPage + paginationOffset;

  const pagesToDisplay = [];

  for (let i = minPage; i <= maxPage; i++) {
    pagesToDisplay.push(
      <Button
        key={i}
        variant={i === currentPage ? ButtonVariants.secondary : ButtonVariants.primary}
        linkTo={pages[i]}
      >
        {i}
      </Button>
    );
  }

  return <Wrapper>
    <Button
      disabled={currentPage === 1}
      variant={ButtonVariants.primary}
      linkTo={previousPageLink}
    >
      {previousPageButtonText}
    </Button>
    <PageNumbersContainer>
      {pagesToDisplay.map(element => element)}
    </PageNumbersContainer>
    <Button
      disabled={currentPage === totalPages}
      variant={ButtonVariants.primary}
      linkTo={nextPageLink}
    >
      {nextPageButtonText}
    </Button>
  </Wrapper>;
};
