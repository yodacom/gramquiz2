const In = 'Your dominant personal center is: Intuitive';
const Fe = 'Your dominant personal center is: Feeling';
const Th = 'Your dominant personal center is: Thinking';
const R = 'Your Primary is R';
const B = 'Your Primary is B';
const G = 'Your Primary is G';
const o = 'Your Secondary is o';
const f = 'Your Secondary is f';
const g = 'Your Secondary is g';
const t = 'Your Secondary is t';
const l = 'Your Secondary is l';
const p = 'Your Secondary is p';
const w = 'Your Secondary is w';
const b = 'Your Secondary is b';
const r = 'Your Secondary is r';

const TypeReport = [
    {
        typeNumber: 1,
        description: 'Your Type is 1 - The Reformer (the principled, idealistic type) ' +
        'Ones are conscientious and ethical, with a strong sense of right and wrong. ' +
        'They are teachers, crusaders, and advocated for change: always striving to improve ' +
        'things, but afraid of making a mistake.<br>Well-organized, orderly, and fastidious, ' +
        'they try to maintain high standards, but can slip into being critical and perfectionistic. ' +
        'They typically have problems with resentment and impatience.<br><b>At their best: Wise, ' +
        'discerning, realistic, noble, and morally heroic.',
        center: 'IN'
    },
    {
        typeNumber: 2,
        description: 'Your Type is 2 - The Helper (the caring, interpersonal type) Twos are empathetic, sincere, ' +
        'and warm-hearted. They are friendly, generous, and self sacrificing, but an also be sentimental, ' +
        'flattering, and people-pleasing. They are well-meaning and driven to be close to others, but can ' +
        'slip into doing things for other in order to be needed.  They typically have problems with ' +
        'possessiveness and with acknowledging their own needs. At their best: unselfish and altruistic, ' +
        'with unconditional love for others.',
        center: 'FE'
    },
    {
        typeNumber: 3,
        description: 'Your Type is 3 - The Achiever (the adaptable, success-oriented type) Threes are self-assured, ' +
        'attractive, and charming. Ambitious, competent, and energetic, they can also be status-conscious ' +
        'and highly driven for advancement. They are diplomatic and poised, but can also be overly concerned ' +
        'with their image and what other think of them. They are typically  have problems with workaholism and ' +
        'competitiveness. At their Best: self-accepting, authentic, everything they seem to be role models who ' +
        'inspire others.',
        center: 'FE'
    },
    {
        typeNumber: 4,
        description: 'Your Type is 4 - The Individualist (the introspective, romantic type) Fours are self aware, sensitive, ' +
        'and reserved. They are emotionally honest, creative, and personal, but can also be moody and self  ' +
        'conscious.  Withholding themselves from others due to feeling vulnerable and defective, they can ' +
        'also feel disdainful and exempt from ordinary ways of living.  They typically have problems with ' +
        'melancholy, self-indulgence, and self-pity. At their best: Inspired, highly creative, able to renew ' +
        'themselves and transform their experiences.',
        center: 'FE'
    },
    {
        typeNumber: 5,
        description: 'Your Type is 5 - The Investigator (the perceptive, cerebral type) Fives are alert, insightful, ' +
        'and curious. They are able to concentrate and focus on developing complex ideas and skills. ' +
        'Independent, innovative, and inventive, they can also become preoccupied with their thoughts and ' +
        'imaginary constructs.  They become detached, yet high-strung and intense.  They typically have problems ' +
        'with eccentricity, nihilism, and isolation. At their best: Visionary pioneers, often ahead of their time, ' +
        'able to see the world in an entirely new way.',
        center: 'TH'
    },
    {
        typeNumber: 6,
        description: 'Your Type is 6 - The Loyalist (the committed, security-oriented type) Sixes are reliable, hard working, ' +
        'responsible, and trustworthy  Excellent troubleshooters, they foresee problems and foster cooperation' +
        'on, but can also become defensive, evasive, and anxious-running on stress while complaining about it.  ' +
        'They can be cautious and indecisive, but also reactive, defiant and rebellious.  They typically have ' +
        'problems with self-doubt and suspicion.<br><b>At their best: internally stable, self-reliant, ' +
        'courageously championing themselves and others.',
        center: 'TH'
    },
    {
        typeNumber: 7,
        description: 'Your Type is 7 - The Enthusiast (the busy, productive type) Sevens are extroverted, optimistic, ' +
        'versatile, and spontaneous. Playful, high-spirited, and practical, they can also misapply their ' +
        'many talents, becoming over-extended, scattered, and undisciplined.  They constantly seek new and ' +
        'exciting experiences, but can become distracted and exhausted by staying on the go. They typically ' +
        'have problems with impatience and impulsiveness. At their best: focus their talents on worthwhile ' +
        'goals, appreciative, joyous and satisfied.',
        center: 'TH'
    },
    {
        typeNumber: 8,
        description: 'Your Type is 8 - The Challenger (the powerful, aggressive type) Eights are self-confident, strong ' +
        'and assertive. Protective, resourceful, straight-talking, and decisive, but can also be ego  centric ' +
        'and domineering.  Eights feel they must control their environment, especially people, sometime ' +
        'becoming confrontational, and intimidating. Eights typically have problems with their tempers ' +
        'and with allowing themselves to be vulnerable. At their best: self-mastering, use their strength to ' +
        'improve others lives, heroic, magnanimous, inspiring.',
        center: 'IN'
    },
    {
        typeNumber: 9,
        description: 'Your Type is 9 - The Peacemaker (the easy  going, self  effacing type)Nines are accepting, ' +
        'trusting, and stable. They are usually creative ,optimistic, and supportive; they can also be too ' +
        'willing to go along with others to keep the peace.  They want everything to go smoothly and be ' +
        'without conflict, but they can also tend to be complacent, simplifying problems and minimizing ' +
        'anything upsetting.  They typically have problem with inertia  and stubbornness. At their best: ' +
        'indomitable, all-embracing, able to bring people together  and heal conflicts.',
        center: 'IN'
    }

];

const Ba = 'You do not have a dominant personal center ot type yet.  You may want to review your word choices again and remove or add some words.';

const fullLink = "<a href='http://www.aktheos.com'>Your personal growth path report</a>";

const More = ` For more more information on your traits and personality check out ${fullLink} to explore more deeply more aspects of your personal profile `;

module.exports = TypeReport;