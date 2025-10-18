// Immediately Invoked Function Expression (IIFE)

(function printMessage() {
    console.log(`Database connected`);
})();

(
    () => {
        console.log(`Database disconnected`);
    }
)();

(
    (name) => {
        console.log(`${name}`);
    }
)("Anubhab");