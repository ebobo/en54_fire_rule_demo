import './panel.css';
import NormalButton from '../atom/button/NormalButton';
import TimerLabel from '../atom/label/TimerLabel';
import { useDispatch } from 'react-redux';

const PanelControl = () => {
  //   const dispatch = useDispatch();
  return (
    <div className='panel-control'>
      <NormalButton label='Delay' />
      <TimerLabel
        name='T1'
        sec={0}
        handleTimeOut={() => {
          console.log('time out');
        }}
      />
      <TimerLabel
        name='T2'
        sec={0}
        handleTimeOut={() => {
          console.log('time out');
        }}
      />
    </div>
  );
};

export default PanelControl;
