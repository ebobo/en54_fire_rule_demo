import './panel.css';
import { DzProperties } from './properties/DzProperties';
import AzProperties from './properties/AzProperties';
import { PntProperties } from './properties/PntProperties';
import FadProperties from './properties/FadProperties';
import { useSelector } from 'react-redux';

const PropertyControl = () => {
  const currentUnit = useSelector((state) => state.op.currentUnit);
  const moniterUnits = useSelector((state) => state.op.moniterUnits);

  return (
    <div className='property-control'>
      {currentUnit && currentUnit.category === 'dz' && (
        <DzProperties unit={currentUnit} monitering={false} />
      )}
      {currentUnit && currentUnit.category === 'az' && (
        <AzProperties unit={currentUnit} monitering={false} />
      )}
      {currentUnit && currentUnit.category === 'point' && (
        <PntProperties unit={currentUnit} monitering={false} />
      )}
      {currentUnit && currentUnit.category === 'fad' && (
        <FadProperties unit={currentUnit} monitering={false} />
      )}
      {moniterUnits.map((unit, index) => {
        if (unit.category === 'dz') {
          return <DzProperties key={index} unit={unit} monitering={true} />;
        }
        if (unit.category === 'az') {
          return <AzProperties key={index} unit={unit} monitering={true} />;
        }
        if (unit.category === 'point') {
          return <PntProperties key={index} unit={unit} monitering={true} />;
        }
        if (unit.category === 'fad') {
          return <FadProperties key={index} unit={unit} monitering={true} />;
        }
        return null;
      })}
    </div>
  );
};

export default PropertyControl;
