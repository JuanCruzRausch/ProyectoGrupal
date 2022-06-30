import Spinner from 'react-bootstrap/Spinner';
import { spinner_box, spinner_spinner, spinner } from './Loading.module.css';

const Loading = () => {
  return (
    <div className={spinner_box}>
      <div className={spinner}>
        <Spinner animation="border" role="status" className={spinner_spinner}>
          {/* <span className="visually-hidden">Loading ...</span> */}
        </Spinner>
      </div>
    </div>
  );
};
export default Loading;
