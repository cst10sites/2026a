var facts = [
	"The team was founded in 2004, entering Formula 1 in 2005, and is owned by the Austrian company Red Bull GmbH, hence the Austrian racing license.",
	"Despite its Austrian license, the team is based in Milton Keynes, United Kingdom, housing its engineers and design teams.",
	"Red Bull Racing secured four consecutive Drivers' and Constructors' titles from 2010-2013 and added more in 2022 and 2023.",
	"Legendary drivers include Sebastian Vettel (multiple titles) and current star Max Verstappen (multiple titles), with others like Daniel Ricciardo and Yuki Tsunoda driving for them.",
	"The team was formed after Red Bull purchased Jaguar Racing from Ford in 2004 for a symbolic one dollar.",
	"The RB19 from 2023 is statistically the most dominant car in F1 history, winning 21 out of 22 races (95.45%) in a single season.",
	"Red Bull owns a second F1 team, currently known as Racing Bulls, which serves as a junior team for developing talent. Isack Hadjar is from this team.",
	"Over the years, the team has used engines from Cosworth, Ferrari, Renault, and Honda, and now moving onto Ford.",
	"Red Bull Racing held a massive 77-race scoring streak that finally ended at their home race in Austria during the 2025 season.",
	"Max Verstappen isn't just a casual gamer: he once reached the top 21 in the world in the FIFA Ultimate Team rankings.",
	"Max Verstappen is fluent in English, German and Dutch, while also understanding some French.",
	"Max Verstappen's first F1 win in Spain was so stressful for his father, Jos, that the he actually developed a nosebleed while watching the final laps.",
	"Max Verstappen's father, Jos Verstappen, was an F1 driver, and his mother, Sophie Kumpen, was a championship-winning kart racer.",
	"When Max Verstappen started racing in F1 at 17, he did not have a legal road driving license at the time.",
	"Isack Hadjar holds dual Algerian and French citizenship.",
	"Isack Hadjar's mother, Randa, serves as his manager in the team.",
	"Due to extreme aerodynamics, an F1 car generates so much downforce that it can technically stick to the roof of a tunnel and drive upside down, as demonstrated by Red Bull.",
	"Brake discs can get hotter than 1,000°C, while engines can't be started when cold, requiring them to be warmed up before races."
]

function generate() {
	var random = Math.random() * facts.length;
	var choice = parseInt(random);

	document.getElementById("facts").innerHTML = facts[choice];
}
