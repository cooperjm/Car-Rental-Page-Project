import styles from './cardButton.module.css';

function CardButton(props) {
  return (
    <a href={props.href} className={styles.cardButton}>
      {props.children}
    </a>
  );
  
}

export default CardButton;
