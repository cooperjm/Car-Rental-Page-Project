import styles from './cardButton.module.css';

function cardButton(props) {
  return (
    <a href={props.href} className={styles.cardButton}>
      {props.children}
    </a>
  );
  
}

export default cardButton;
