import { User } from '../components/user/index';
import '../styles/home.css';

export function Home() {
    return (
        <div>
            <div>
                <h1>Consulte seus projetos no Git</h1>
                <div>
                    <User />
                </div>
            </div>
        </div>

    )
}