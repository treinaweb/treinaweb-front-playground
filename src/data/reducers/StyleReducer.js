import * as StyleConstants from '../actions/StyleActions';

const initialState = {
    html: {initial: '', controllers: []},
    css: {initial: '', controllers: []}
}

const StyleReducer = (style = initialState, action) => {
    switch(action.type){
        case StyleConstants.STYLE_LIST_RESPONSE: 
            return action.styleList;
        case StyleConstants.STYLE_UPDATE: 
            const controllers = style.css.controllers.map(controller => {
                if(controller.selector !== action.selector){
                    return controller;
                }
                const newProps = controller.props.map(prop => {
                    if(prop.name !== action.prop.name){
                        return prop;
                    }
                    return Object.assign({}, prop, action.prop);
                });
                return {
                    selector: controller.selector,
                    props: newProps
                }
            });
            const newObject = {
                css: {
                    initial: style.css.initial,
                    controllers
                }
            };
            return Object.assign({}, style, newObject);
        default: return style;
    }
}

export default StyleReducer;