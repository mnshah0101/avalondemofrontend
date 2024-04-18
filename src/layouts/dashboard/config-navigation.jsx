import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Cases',
    path: '/cases',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Rachel',
    path: '/rachel',
    icon: icon('ic_user'),
  },
];

export default navConfig;
