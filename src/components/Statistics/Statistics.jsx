import PropTypes from 'prop-types';
import {
  Stats,
  StaticticTitle,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <Stats>
      {title && <StaticticTitle>{title}</StaticticTitle>}

      <StatList>
        {stats.map(({ id, percentage, label }) => (
          <StatListItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatListItem>
        ))}
      </StatList>
    </Stats>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
