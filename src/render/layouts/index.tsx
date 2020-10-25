
import { getMenuData, getPageTitle} from '@ant-design/pro-layout';
import React from 'react';
import {useIntl, connect} from 'umi';
import {Helmet, HelmetProvider} from "react-helmet-async";


const BasicLayout = (props) => {
  console.log(props)

  // const {
  //   settings,
  //   route = {
  //     routes: [],
  //   },
  // } = props;
  // const { routes = [] } = route;
  // const {
  //   children,
  //   location = {
  //     pathname: '',
  //   },
  // } = props;
  // const { formatMessage } = useIntl();
  // const { breadcrumb } = getMenuData(routes);
  // const title = getPageTitle({
  //   pathname: location.pathname,
  //   formatMessage,
  //   breadcrumb,
  //   ...props,
  //   title:settings.title
  // });

  const title = 'layout 模板'

  return (
    <HelmetProvider>
      <Helmet>
        {/* <title>{title}</title> */}
        <meta name="description" content={'title'} />
      </Helmet>
      {props.children}
    </HelmetProvider>
  );
};

export default connect(({ global, settings }) => ({
}))(BasicLayout);
