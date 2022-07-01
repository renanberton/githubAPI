import { useEffect, useState } from 'react';
import './style.css';

type userType = {
    name: string,
    repo: string,
    branch: string,
    commit: string,
    branches_url: string,
    owner: string,
    description: string,
    branches: any,
}

type branchType = {
    name: string,
}

export function User() {
    const [repositories, setRepositories] = useState<userType[]>([]);
    const [branches, setBranches] = useState<branchType[]>([]);

    function LoadRepos() {

        useEffect(() => {
            fetch('https://api.github.com/repos/renanberton/LetMeAsk/branches')
                .then(response => response.json())
                .then(data => setBranches(data))
        }, [])

        useEffect(() => {
            fetch('https://api.github.com/users/renanberton/repos')
                .then(response => response.json())
                .then(data => setRepositories(data))
        }, [])

        return (
            <div>
                <ul>
                    {branches.map(branch => {
                        return (
                            <p>{branch.name}</p>
                        )
                    })}
                    {repositories.map(repo => {
                        return (
                            <div>
                                <li><p>{repo.name}</p></li>
                                <li><p>{repo.branches_url}</p></li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
    return (
        LoadRepos()
    )
}