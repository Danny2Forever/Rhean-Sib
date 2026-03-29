module.exports = {
    name: 'roll',
    execute(message, args) {
        let min = 0;
        let max = 100;

        if (args.length === 1) {
            max = parseInt(args[0]);
        }

        if (args.length === 2) {
            min = parseInt(args[0]);
            max = parseInt(args[1]);
        }

        if (isNaN(min) || isNaN(max)) {
            return message.reply('Enter number!');
        }

        if (min > max) {
            [min, max] = [max, min];
        }

        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        message.reply(`🎲 ${message.author} rolled ${result} (${min}-${max})`);
    },
};