import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Link } from '@mui/material';
//
import Iconify from '../../Iconify';
import { ListItemStyle, ListItemTextStyle, ListItemIconStyle } from './style';
import { isExternalLink } from '..';
import useAuth from "../../../hooks/useAuth";

// ----------------------------------------------------------------------

NavItemRoot.propTypes = {
  active: PropTypes.bool,
  open: PropTypes.bool,
  isCollapse: PropTypes.bool,
  onOpen: PropTypes.func,
  item: PropTypes.shape({
    children: PropTypes.array,
    icon: PropTypes.any,
    info: PropTypes.any,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
};

export function NavItemRoot({ item, isCollapse, open = false, active, onOpen }) {
  const { title, path, icon, info, children } = item;
  const {user} = useAuth("")


  const renderContent = (
      <>
        {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}
        <ListItemTextStyle disableTypography primary={title} isCollapse={isCollapse} />
        {!isCollapse && (
            <>
              {info && info}
              {children && <ArrowIcon open={open} />}
            </>
        )}
      </>
  );


  return isExternalLink(path) ? (
      <ListItemStyle component={Link} href={path} target="_blank" rel="noopener">
        {renderContent}
      </ListItemStyle>
  ) : (
      <ListItemStyle component={RouterLink} to={path} activeRoot={active}>
        {renderContent}
      </ListItemStyle>
  );
}
// ----------------------------------------------------------------------

ArrowIcon.propTypes = {
  open: PropTypes.bool,
};

export function ArrowIcon({ open }) {
  return (
      <Iconify
          icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
          sx={{ width: 16, height: 16, ml: 1 }}
      />
  );
}
