import React from 'react';

export default class TableWidget extends React.Component {
    render () {
        return ( 
            <div className="hpanel">
                <div className="panel-heading">
                    <div className="panel-tools">
                        <a className="showhide"><i className="fa fa-chevron-up"></i></a>
                        <a className="closebox"><i className="fa fa"></i></a>
                    </div>
                    Activity
                </div>
                <div className="panel-body list">

                    <div className="pull-right">
                        <a href="#" className="btn btn-xs btn-default">Today</a>
                        <a href="#" className="btn btn-xs btn-default">Month</a>
                    </div>
                    <div className="panel-title">Last Activity</div>
                    <small className="fo">This is simple example</small>
                    <div className="list-item-container">
                        <div className="list-item">
                            <h3 className="no-margins font-extra-bold text-success">2,773</h3>
                            <small>Tota Messages Sent</small>
                            <div className="pull-right font-bold">98% <i className="fa fa-level-up text-success"></i></div>
                        </div>
                        <div className="list-item">
                            <h3 className="no-margins font-extra-bold text-color3">4,422</h3>
                            <small>Last activity</small>
                            <div className="pull-right font-bold">13% <i className="fa fa-level-down text-color3"></i></div>
                        </div>
                        <div className="list-item">
                            <h3 className="no-margins font-extra-bold text-color3">9,180</h3>
                            <small>Monthly income</small>
                            <div className="pull-right font-bold">22% <i className="fa fa-flash text-color3"></i></div>
                        </div>
                        <div className="list-item">
                            <h3 className="no-margins font-extra-bold text-success">1,450</h3>
                            <small>Tota Messages Sent</small>
                            <div className="pull-right font-bold">44% <i className="fa fa-level-up text-success"></i></div>
                        </div>
                    </div>

                </div>
            </div>   
        );
    }
}
