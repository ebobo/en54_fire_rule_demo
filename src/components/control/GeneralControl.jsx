import './panel.css';
import ToggleSwitch from '../atom/switch/ToggleSwitch';
import { showAllDZ } from '../../redux/actions/dzActions';
import { showAllAZ } from '../../redux/actions/azActions';
import { showOZ } from '../../redux/actions/ozActions';
import { setNightModel } from '../../redux/actions/panelActions';
import { useDispatch, useSelector } from 'react-redux';

const GeneralControl = () => {
  const nightMode = useSelector((state) => state.panel.night_mode);
  const dispatch = useDispatch();
  console.log(`nightMode - ${nightMode}`);
  return (
    <div className={`general-control${nightMode ? '-night' : ''}`}>
      <ToggleSwitch
        inputName={'dz'}
        label={'Show DZ'}
        status={'off'}
        onChangeHandel={(e) => {
          dispatch(showAllDZ(e.currentTarget.checked));
        }}
        nightMode={nightMode}
      />
      <ToggleSwitch
        inputName={'az'}
        label={'Show AZ'}
        status={'off'}
        onChangeHandel={(e) => {
          dispatch(showAllAZ(e.currentTarget.checked));
        }}
        nightMode={nightMode}
      />
      <ToggleSwitch
        inputName={'oz'}
        label={'Show OZ'}
        status={'off'}
        onChangeHandel={(e) => {
          dispatch(showOZ(e.currentTarget.checked));
        }}
        nightMode={nightMode}
      />
      <ToggleSwitch
        inputName={'panel'}
        label={'Night Mode'}
        status={'off'}
        onChangeHandel={(e) => {
          dispatch(setNightModel(e.currentTarget.checked));
        }}
        nightMode={nightMode}
      />
    </div>
  );
};

export default GeneralControl;
