import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';
import { useTheme } from '../../contexts/ThemeContext';

import styles from './styles.module.scss';

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR });
  const { isDarkMode, toggleDarkMode} = useTheme();

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <img className={styles.logo} src="/logo.svg" alt="Podcastr"/>
      </Link>

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
      <button type="button" onClick={toggleDarkMode} className={isDarkMode ? styles.dark : ''}>
        <img src="/theme-mode.svg" alt="Trocar Tema"/>
      </button>
    </header>
  )
}