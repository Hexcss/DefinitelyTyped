import inky, { Inky, InkyOptions, CheerioOptions } from 'inky';

// Example usage of InkyOptions and CheerioOptions
const inkyOptions: InkyOptions = {
    src: 'path/to/source.html',
    dest: 'path/to/destination',
    components: {
        button: 'custom-button',
        container: 'custom-container'
    },
    columnCount: 12
};

const cheerioOptions: CheerioOptions = {
    xmlMode: true,
    decodeEntities: false
};

// Creating an instance of Inky
const myInkyInstance = new Inky(inkyOptions);

// Example usage of Inky class method
const processedHTML = myInkyInstance.releaseTheKraken('<button>Click me</button>', cheerioOptions);

// Example usage of static method
const mergedOptions = Inky.mergeCheerioOpts(cheerioOptions);

// Example usage of the default exported function
inky(inkyOptions, (err, result) => {
    if (err) {
        console.error('Error processing:', err);
    } else {
        console.log('Processing result:', result);
    }
});
