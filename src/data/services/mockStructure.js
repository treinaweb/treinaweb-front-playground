import copy from 'copy-text-to-clipboard';

const data = {
    html: {
        initial: `
<div class="container" >
    <div class="item" ></div>
    <div class="item" ></div>
    <div class="item" ></div>
    <div class="item" ></div>
    <div class="item" ></div>
    <div class="item" ></div>
</div>
        `,
        controllers: [

        ]
    },
    css: {
        initial: `
.container{
border: 2px solid black;
background-color: #0265ad;
}
.item{
border: 2px solid black;
background-color: #a2cff0;
height: 50px;
}
        `,
        controllers: [
            {
                selector: '.container',
                props: [
                    {
                        name: 'display',
                        value: 'inline-block',
                        type: 'string'
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

export default data;

window.getMockData = () => {
    copy(JSON.stringify(data));
}