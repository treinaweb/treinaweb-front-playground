import React, { Component } from 'react';

import * as StyleConstants from '../../data/actions/StyleActions';

class StyleContainer extends Component{
    static defaultProps = {
        initial: '',
        controllers: []
    }

    controllersToCssString(){
        const controllers = this.props.controllers;
        let css = '';
        controllers.forEach(controller => {
            css += `${controller.selector}{`;
            controller.props.forEach(prop => {
                css += `${prop.name}: ${prop.value}${prop.valueSuffix || ''};`;
            })
            css += `}`;
        })
        return {'__html': css};
    }

    onChange = (selector, prop) => {
        this.props.dispatch(StyleConstants.cssUpdate(selector, prop));
    }

    render(){
        const { props } = this,
            { controllers } = props;
        if(controllers.length === 0){
            return <style>{props.initial}</style>;
        }
        
        return (
            <div>
                <style>{props.initial}</style>
                <style dangerouslySetInnerHTML={this.controllersToCssString()} ></style>
                <div className="tw-code-container">
                    {
                        controllers.map(controller => {
                            return (
                                <div key={controller.selector} >
                                    <div><span className="tw-css-selector">{controller.selector}</span> {'{'}</div>
                                    <div className="tw-css-body" >
                                        {
                                            controller.props.map(prop => { 
                                                const value = prop.hideTextValue ? '' : `${prop.value}${prop.valueSuffix || ''};`;
                                                return (
                                                    <React.Fragment key={prop.name} >
                                                        <span className="tw-css-property">{prop.name}<span className="tw-punctuation">:</span></span>
                                                        <div className="tw-css-value">{value}
                                                            {
                                                                prop.type === 'string' ? '' : <div className="tw-css-controller-container" >
                                                                    <ControllerComponent  prop={prop} onChange={this.onChange} controller={controller} />
                                                                    
                                                                </div>
                                                            }
                                                        </div>
                                                    </React.Fragment>
                                                );
                                            })
                                        }
                                    </div>
                                    <div>{'}'}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
        
    }
}

function ControllerComponent(props){
    switch(props.prop.type){
        case 'select':  return <SelectComponent {...props} />;
        case 'range': return <RangeComponent {...props} />;
        case 'radio': return <RadioComponent {...props} />;
        case 'color': return <ColorComponent {...props} />;
        default: return '';
    }
}

function SelectComponent(props){
    const {prop, controller, onChange} = props;
    return (
        <select value={prop.value} onChange={({currentTarget}) => {onChange(controller.selector, {name: prop.name, value: currentTarget.value})}} >
            {
                prop.options.map(option => {
                    return (
                        <option key={option.value} value={option.value} >{option.name || option.value}</option>
                    );
                })
            }
        </select>
    );
}

function RangeComponent(props){
    const {prop, controller, onChange} = props;
    const inputProps = {};
    prop.properties.forEach(prop => inputProps[prop.name] = prop.value);
    return (<input type="range" value={prop.value} {...inputProps} onInput={({currentTarget}) => {onChange(controller.selector, {name: prop.name, value: currentTarget.value})}} />);
}

function RadioComponent(props){
    const {prop, controller, onChange} = props;
    return (
        <div>
            {prop.options.map(option => {
                const name = `${controller.selector}-${prop.name}`;
                return (
                    <label className="tw-label" key={option.value} >
                        <input checked={option.value === prop.value} name={name} type="radio" value={option.value} onChange={({currentTarget}) => {onChange(controller.selector, {name: prop.name, value: currentTarget.value})}} />
                        {option.name || option.value}
                    </label>
                )
            })}
        </div>
    );
}

function ColorComponent(props){
    const {prop, controller, onChange} = props;

    return (<input type="color" value={prop.value} onInput={({currentTarget}) => {onChange(controller.selector, {name: prop.name, value: currentTarget.value})}} />);
}

export default StyleContainer;