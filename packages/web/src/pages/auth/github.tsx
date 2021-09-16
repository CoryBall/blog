import React from 'react';
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useLoginMutation, useMeLazyQuery, User } from '@blog/types';
import { useAppDispatch } from '@blog/state';
import { loginUser, setUser } from '@blog/state/user';

const GithubRedirect: NextPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [loginMutation, {data: loginData, error: loginError}] = useLoginMutation();
    const [meQuery, {data: userData, error: userError}] = useMeLazyQuery();
    const { code } = router.query;

    React.useEffect(() => {
        if (!code) return;
        const githubCode = code as string;
        (async () => {
            await loginMutation({
                variables: {
                    code: githubCode
                }
            });
        })();
    }, [code])

    React.useEffect(() => {
        if (loginError || !loginData?.login) return;
        dispatch(loginUser(loginData?.login?.bearer));
        (async () => {
            await meQuery();
        })();
    }, [loginData])

    React.useEffect(() => {
        if (userError || !userData?.me) return;
        dispatch(setUser(userData.me as User));
        router.push('/');
    }, [userData])

    return (
        <div className="text-light">
            <div />
        </div>
    )
}

export default GithubRedirect;