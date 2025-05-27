import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';
export function Menu() {
    const [Theme, setTheme ] = useState<AvailableThemes>(() => {
        const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
        return storageTheme;
    }); 

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault(); // não segue o link 


        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }


    useEffect(() => {
        console.log('', Date.now());
        document.documentElement.setAttribute('data-theme', Theme);
        localStorage.setItem('theme', Theme);
    }, [Theme]);  

    return (
        <nav className={styles.menu}>
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
            {nextThemeIcon[Theme]}
                
            </a>
        </nav>
    )
    
}

