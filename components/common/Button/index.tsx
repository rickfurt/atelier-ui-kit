import styles from './button.module.scss'

type Props = {
 theme: 'primary' | 'secondary',
  text:string,
};

export const Button = (props: Props) => {
  const {theme} = props;
  return (
    <div className={styles[theme]}>
      text here
    </div>
  );
};