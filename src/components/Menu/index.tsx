import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';
export function Menu() {
    const [Theme, setTheme ] = useState<AvailableThemes>('dark'); // Deixando a variavel com tipagem segura.

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault(); // não segue o link 


        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });

        //document.documentElement.setAttribute('data-theme', theme);

    }

    // useEffect(() => {
    //     console.log('useEffect sem depebedencias', Date.now()); 
    // }); // Executado todas as vezes que o compomente renderiza na tela

    // useEffect(() => {
    //     console.log('useEffect com arrau deps vazia', Date.now());
    // },[]); // executa apenas quando o react monta componente na tela pela primeira vez

    useEffect(() => {
        console.log('', Date.now());
        document.documentElement.setAttribute('data-theme', Theme);
    }, [Theme]);  // executa apenas quando o valor de theme mudar
    return (
        <nav className={styles.menu}>
            <h1>{Theme}</h1>
            <a className={styles.menuLink} href="#" aria-label='Ir para a home' title='Ir para a home'>
                <HouseIcon />
                
            </a>
            <a className={styles.menuLink} href="#" aria-label='Ver historíco' title='Ver histórico'>
                <HistoryIcon />
                
            </a>
            <a className={styles.menuLink} href="#" aria-label='Configurações' title='Configurações'>
                <SettingsIcon />
                
            </a>
            <a className={styles.menuLink} href="#" aria-label='Mudar tema' title='Mudar tema' onClick={handleThemeChange}>
                <SunIcon />
                
            </a>
        </nav>
    )
    
}

