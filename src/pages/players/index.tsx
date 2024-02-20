import React from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

import { Input, Button } from '../../components';
import { SearchResult } from './search-result';
import useNameSearch from '../../hooks/useSearch';

import styles from './players.module.css';

function Players() {
  const [searchParams, setSearchParams] = useSearchParams();
  const nickname = searchParams.get('nickname');
  const { users, isLoading, error } = useNameSearch(nickname || '');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<{ nickname: string }>();

  const onSubmit = async ({ nickname }: { nickname: string }) => {
    setSearchParams({ nickname });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          defaultValue={nickname || ''}
          label="Player nickname"
          {...register('nickname', { required: 'Nickname field is required' })}
        />
        <Button type="submit" disabled={isSubmitting || isLoading}>
          Search
        </Button>
      </form>
      {!users || users.length < 1 ? (
        <div className={styles.emptySearch}>
          <h3>Enter a nickname and find a player you need</h3>
        </div>
      ) : (
        <div className={styles.searchResults}>
          {users?.map((el, index) => (
            <SearchResult key={index} {...el} />
          ))}
        </div>
      )}
    </div>
  );
}

export { Players };
