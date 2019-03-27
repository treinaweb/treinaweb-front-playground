const mock = {
    html: {
        initial: `
<div class="container" >
<div class="item" >1</div>
<div class="item" >2</div>
<div class="item" >3</div>
</div>
        `,
        controllers: [

        ]
    },
    css: {
        initial: `
.container{
border: 2px solid black;
padding: 10px;
background-color: lightblue;
}
.item{
border: 1px solid black;
background-color: darkblue;
margin: 5px;
}
        `,
        controllers: [
            {
                selector: '.container',
                avoidHighlight: true,
                props: [
                    {
                        name: 'display',
                        value: 'inline-block',
                        type: 'string'
                    },
                    {
                        name: 'color',
                        value: '#0062ac',
                        type: 'color'
                    },
                    {
                        name: 'background-color',
                        value: '#9962ac',
                        type: 'color'
                    },
                    {
                        name: 'width',
                        value: '50',
                        valueSuffix: '%',
                        type: 'number',
                        hideTextValue: true
                    },
                    {
                        name: 'grid-template-columns',
                        value: '1fr',
                        hideTextValue: true,
                        type: 'text',
                    }
                ]
            },
            {
                selector: '.item',
                props: [
                    {
                        name: 'display',
                        value: 'inline-block',
                        type: 'radio',
                        hideTextValue: true,
                        options: [
                            {
                                value: 'block'
                            },
                            {
                                value: 'inline-block'
                            },
                            {
                                value: 'inline'
                            }
                        ]
                    },
                    {
                        name: 'text-align',
                        value: 'initial',
                        type: 'check',
                        onValue: 'right',
                        offValue: 'initial',
                        checkName: 'right',
                        hideTextValue: true,
                    },
                    {
                        name: 'width',
                        value: '30',
                        valueSuffix: '%',
                        type: 'range',
                        properties: [
                            {
                                name: 'min',
                                value: '10'
                            },
                            {
                                name: 'max',
                                value: '100'
                            },
                            {
                                name: 'step',
                                value: '10'
                            }
                        ]
                    }
                ]
            }
        ]
    },
};

export default mock;