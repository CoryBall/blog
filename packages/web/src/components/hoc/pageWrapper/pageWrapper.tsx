import { useMeLazyQuery } from '@blog/web/graphql/generatedTypes';
import { useAppDispatch } from '@blog/state';
import { setUser } from '@blog/state/user';
import { setApolloLink } from '@blog/state/app'
import { User } from '@blog/types';
import React from 'react';
import { getTokensFromCookies } from '../context/helpers';

type PageWrapperProps = {
    children: React.ReactNode
}

const PageWrapper: React.FC<PageWrapperProps> = (props: PageWrapperProps) => {
    const {children} = props;
    const [login, {data, error}] = useMeLazyQuery();
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        (async () => {
            const cookieToken = getTokensFromCookies();
            if (cookieToken && cookieToken) {
                dispatch(setApolloLink(cookieToken));
                try {
                    login()
                } catch(e) {
                    console.warn(e)
                }
            }
        })();
    }, [])

    React.useEffect(() => {
        if (!data?.me || error) return;
        
        dispatch(setUser(data?.me as User))
        
    }, [data])

    return (
        <>
            {children}
        </>
    )
}

export default PageWrapper;