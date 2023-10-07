import { useCallback } from "react";
import PropTypes from "prop-types";

import { TextButton } from "components/widgets/buttons";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import useNavigation from "hooks/useNavigation";

import _styles from "./_styles.module.css";

const ManageHeader = ({ title, status }) => {
  const { primary_pathname, setPath } = useNavigation();

  const handleClick = useCallback(() => {
    setPath(`/${primary_pathname}`);
  }, [primary_pathname, setPath]);

  return (
    <div className={_styles.container}>
      <TextButton
        className={_styles.title}
        endIcon={ChevronRightIcon}
        onClick={handleClick}>
        {title}
      </TextButton>
      <h2 className={_styles.status}>{status}</h2>
    </div>
  );
};

ManageHeader.propTypes = {
  title: PropTypes.string,
  status: PropTypes.string,
};

ManageHeader.defaultProps = {
  title: "",
  status: "",
};

export default ManageHeader;
