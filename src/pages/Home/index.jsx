import React, { useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { InputControll, ResultContent } from './styled';
import axios from '../../services/axios';

export default function Home() {
    const [name, setName] = useState('');
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchBtn = async () => {
        if (!name) return;
        setLoading(true);
        try {
            const response = await axios.get(`search/users?q=${name}`);
            setProfile(response.data.items[0]);

            // Requisição para o perfil completo do usuário
            const fullProfileResponse = await axios.get(
                `https://api.github.com/users/${response.data.items[0].login}`,
            );
            const fullProfile = fullProfileResponse.data;
            setProfile(fullProfile);

            // Requisição para os repositórios do usuário
            const respoResponse = await axios.get(
                `https://api.github.com/users/${fullProfile.login}/repos`,
            );
            setRepos(respoResponse.data);
            console.log(fullProfile);
            console.log(respoResponse.data);
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <InputControll>
                <input
                    type="text"
                    placeholder="Github username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={searchBtn}>Search</button>
            </InputControll>
            <ResultContent>
                {profile ? (
                    <>
                        <img src={profile.avatar_url} alt={profile.login} />
                        <div className="rightContent">
                            <div className="infoContent">
                                <h3>Usename: {profile.login}</h3>
                                <h3>Name: {profile.name}</h3>
                                <h3>followers: {profile.followers}</h3>
                                <h3>Repositories count: {repos.length}</h3>
                            </div>
                            <div className="repoContent">
                                <h3>Repositories:</h3>
                                <ul>
                                    {repos.length > 0 ? (
                                        repos.map((repo) => (
                                            <li key={repo.id}>
                                                <a
                                                    href={repo.html_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {repo.name}
                                                </a>
                                            </li>
                                        ))
                                    ) : (
                                        <p>No repositories found.</p>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>No profile found</p>
                )}
            </ResultContent>
        </Container>
    );
}
