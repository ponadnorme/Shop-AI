'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Input} from '@/app/components/Input';
import {
  CenteredContentContainerElement,
  ErrorMessageElement,
} from '@/app/styles/common';
import {LoaderSpinner} from '@/app/components/LoaderSpinner';
import {SearchedItem} from '@/app/components/SearchedItem';
import {
  NoResultsElement,
  ProductsSearchElement,
  SearchedProductsElement
} from './styles';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {KeyboardEvent, useEffect, useRef, useState} from 'react';
import {buildRoute, Pages} from '@/app/routes';
import {useRouter, useSearchParams} from 'next/navigation';
import {useDebounceValue, useOnClickOutside} from 'usehooks-ts';
import {useProducts} from '@/app/store/api/productsClient';
import {extractErrorMessages} from '@/app/utils/apiResponseExtractionUtils';

export const ProductsSearch = () => {
  const router = useRouter();

  const searchEngineRef = useRef(null);

  const searchParams = useSearchParams();
  const query = searchParams.get('query') as string;
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setValue] = useDebounceValue(inputValue, 500);

  useEffect(() => {
    if (!!query) {
      setInputValue(query);
    } else {
      setInputValue('');
    }
  }, [query]);

  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowSearchResults(false);
    }
    if (e.key === 'Enter' && inputValue.length) {
      router.push(buildRoute(Pages.products) + `?query=${encodeURIComponent(inputValue)}`);
      setShowSearchResults(false);
    }
  };

  const shouldFetch = debouncedValue.length >= 3;
  const {
    products,
    productsIsLoading,
    productsErrors,
  } = useProducts({query: debouncedValue, limit: 10}, shouldFetch);

  const errorMessages: Array<string> = [];

  if (!!productsErrors) {
    errorMessages.push(...(extractErrorMessages({errorResponse: productsErrors})));
  }

  const handleClickOutsideSearchEngine = (e: MouseEvent | TouchEvent | FocusEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.searchEngine')) {
      return;
    }
    setShowSearchResults(false);
  };

  useOnClickOutside(searchEngineRef, handleClickOutsideSearchEngine);

  const handleSearchInputFocus = () => {
    setShowSearchResults(true);
  };

  const handleInputValue = (value: string) => {
    setInputValue(value);
    setShowSearchResults(true);
    setValue(value);
  };

  return <ProductsSearchElement>
    <FontAwesomeIcon icon={faSearch}/>
    <Input
      defaultValue={inputValue}
      onChange={e => handleInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
      onFocus={(e) => handleSearchInputFocus(e.target.value)}
      placeholder={'Czego szukasz?'}
      className={'searchEngine'}
    />
    {showSearchResults && shouldFetch && (
      <SearchedProductsElement
        ref={searchEngineRef}
      >
        <CenteredContentContainerElement>
          {productsIsLoading && <LoaderSpinner/>}
          {errorMessages && errorMessages.map((value, index) => {
            return <ErrorMessageElement
              key={index}
            >{value}</ErrorMessageElement>;
          })}
          {!!products && (
            products.length > 0 ? (
              products.map(product =>
                <SearchedItem
                  hideSearchedItems={() => setShowSearchResults(false)}
                  clearInput={() => setInputValue('')}
                  key={product.id}
                  product={product}
                />
              )
            ) : <NoResultsElement>Brak pasujących wyników...</NoResultsElement>
          )}
        </CenteredContentContainerElement>
      </SearchedProductsElement>
    )}
  </ProductsSearchElement>;
};
