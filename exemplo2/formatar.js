'use strict';

module.exports = (values) => {
    return {
        papel: values[0].data,
        data: values[3].data,
        empresa: values[4].data,
        setor: values[6].data,
        subsetor: values[8].data
    };
}
