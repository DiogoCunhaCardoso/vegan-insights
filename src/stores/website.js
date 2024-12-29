import { defineStore } from "pinia";
//navigationCards
import VeganCalculatorImage from "@/assets/icons/vegan-calculator.svg";
import VeganFactsImage from "@/assets/icons/vegan-facts.svg";
import AnimalKillCountImage from "@/assets/icons/animal-kill-count.svg";
//animals
import FishImage from "@/assets/animals/fish.svg";
import ChickenImage from "@/assets/animals/chicken.svg";
import CowImage from "@/assets/animals/cow.svg";
import PigImage from "@/assets/animals/pig.svg";
import RabbitImage from "@/assets/animals/rabbit.svg";
import DuckImage from "@/assets/animals/duck.svg";
import BirdImage from "@/assets/animals/bird.svg";
import DogImage from "@/assets/animals/dog.svg";
import HorseImage from "@/assets/animals/horse.svg";
import SheepImage from "@/assets/animals/sheep.svg";
import BuffaloImage from "@/assets/animals/buffalo.svg";
import CatImage from "@/assets/animals/cat.svg";
import GoatImage from "@/assets/animals/goat.svg";
import RodentImage from "@/assets/animals/rodent.svg";
import TurkeyImage from "@/assets/animals/turkey.svg";

const secondsInYear = 365 * 24 * 60 * 60;

export const useWebsiteStore = defineStore("website", {
  state: () => ({
    navigationCards: [
      {
        title: "Vegan Calculator",
        description:
          "Track your impact: see animals saved, CO2 reduced, and resources conserved.",
        icon: VeganCalculatorImage,
        bgColor: "bg-foreground-dark",
        pageName: "calculator",
      },
      {
        title: "Vegan Facts",
        description:
          "Discover veganism, animal, and environmental facts to inspire change.",
        icon: VeganFactsImage,
        bgColor: "bg-foreground-medium",
        pageName: "facts",
      },
      {
        title: "Animal Kill Count",
        description:
          "Real-time counter showing animals killed for food every second globally.",
        icon: AnimalKillCountImage,
        bgColor: "bg-foreground-light",
        pageName: "killCount",
      },
    ],
    animals: [
      {
        name: "Fish",
        image: FishImage,
        rate: 90000000000 / secondsInYear / 20,
        count: 0, // Dynamic counter
      },
      {
        name: "Chicken",
        image: ChickenImage,
        rate: 45895000000 / secondsInYear / 20,
        count: 0,
      },
      {
        name: "Duck",
        image: DuckImage,
        rate: 2262000000 / secondsInYear / 20,
        count: 0,
      },
      {
        name: "Pig",
        image: PigImage,
        rate: 1244000000 / secondsInYear / 20,
        count: 0,
      },
      {
        name: "Rabbit",
        image: RabbitImage,
        rate: 857000000 / secondsInYear / 20,
        count: 0,
      },
      {
        name: "Turkey",
        image: TurkeyImage,
        rate: 691000000 / secondsInYear / 20,
        count: 0,
      },
      {
        name: "Goose",
        image: DuckImage,
        rate: 533000000 / secondsInYear / 20,
        count: 0,
      },
      {
        name: "Sheep",
        image: SheepImage,
        rate: 515000000 / secondsInYear / 20,
        count: 0,
      },
      {
        name: "Goat",
        image: GoatImage,
        rate: 345000000 / secondsInYear / 20,
        count: 0,
      },
      {
        name: "Cows & Calves",
        image: CowImage,
        rate: 292000000 / secondsInYear / 20,
        count: 0,
      },
      {
        name: "Rodents",
        image: RodentImage,
        rate: 65000000 / secondsInYear / 20,
        count: 0,
      },
      {
        name: "Pigeons & Birds",
        image: BirdImage,
        rate: 63000000 / secondsInYear / 20,
        count: 0,
      },
      {
        name: "Buffaloes",
        image: BuffaloImage,
        rate: 23000000 / secondsInYear / 20,
        count: 0,
      },
      {
        name: "Dogs",
        image: DogImage,
        rate: 4000000 / secondsInYear / 20,
        count: 0,
      },
      {
        name: "Cats",
        image: CatImage,
        rate: 3000000 / secondsInYear / 20,
        count: 0,
      },
      {
        name: "Horses",
        image: HorseImage,
        rate: 2000000 / secondsInYear / 20,
        count: 0,
      },
    ],
    startTime: null,
    elapsedTime: 0,
    facts: [
      // GREENHOUSE GASES
      {
        text: "Animal agriculture is responsible for 18% of greenhouse gas emissions, more than the combined exhaust from all transportation.",
        sourceName: "FAO, Rome 2006",
        sourceLink: "https://www.fao.org/4/a0701e/a0701e00.htm",
        category: "Greenhouse Gases",
      },
      {
        text: "Transportation exhaust is responsible for 13% of all greenhouse gas emissions.",
        sourceName: "FAO, Rome 2006",
        sourceLink: "https://www.fao.org/4/a0701e/a0701e00.htm",
        category: "Greenhouse Gases",
      },
      {
        text: "Livestock and their byproducts produce 32 billion tons of CO2 annually, accounting for 51% of global greenhouse gas emissions.",
        sourceName: "WorldWatch, Nov/Dec 2009",
        sourceLink: "https://templatelab.com/livestock-and-climate-change/",
        category: "Greenhouse Gases",
      },
      {
        text: "Methane is 25-100 times more destructive than CO2 on a 20-year time frame.",
        sourceName: "Scientific American, Dec 22, 2015",
        sourceLink:
          "https://www.scientificamerican.com/article/how-bad-of-a-greenhouse-gas-is-methane/",
        category: "Greenhouse Gases",
      },
      {
        text: "Livestock generates 65% of human-related nitrous oxide emissions, a gas 296 times more potent than CO2, lasting 150 years in the atmosphere.",
        sourceName: "FAO, Rome 2006",
        sourceLink: "https://www.fao.org/4/a0701e/a0701e00.htm",
        category: "Greenhouse Gases",
      },
      {
        text: "Emissions for agriculture projected to increase 80% by 2050.",
        sourceName: "Global GHG Data, Nov 27, 2014",
        sourceLink: "https://pubmed.ncbi.nlm.nih.gov/25383533/",
        category: "Greenhouse Gases",
      },
      {
        text: "Energy related emissions expected to increase 20% by 2040.",
        sourceName: "EPA gov, Jan 06, 2015",
        sourceLink:
          "https://www.epa.gov/ghgemissions/overview-greenhouse-gases",
        category: "Greenhouse Gases",
      },
      {
        text: "US Methane emissions from livestock and natural gas are nearly equal.",
        sourceName: "EPA gov, 1990-2015",
        sourceLink:
          "https://www.epa.gov/sites/default/files/2017-02/documents/2017_complete_report.pdf",
        category: "Greenhouse Gases",
      },
      {
        text: "Cows produce 150 billion gallons of methane per day.",
        sourceName: "International Business Times, Nov 26, 2013",
        sourceLink:
          "https://www.ibtimes.com/cow-farts-have-larger-greenhouse-gas-impact-previously-thought-methane-pushes-climate-1487502",
        category: "Greenhouse Gases",
      },
      {
        text: "Converting to wind and solar power will take 20+ years and roughly 43 trillion dollars.",
        sourceName: "Inhabit, Sep 24, 2013",
        sourceLink:
          "https://inhabitat.com/infographic-how-much-would-it-cost-for-the-entire-planet-to-switch-to-renewable-energy/",
        category: "Greenhouse Gases",
      },

      // HUMANITY
      {
        text: "414 billion dollars in externalized cost from animal agriculture.",
        sourceName: "Meatonomics, Apr 2014",
        sourceLink: "https://meatonomics.com/tag/externalized-costs/",
        category: "Humanity",
      },
      {
        text: "80% of antibiotics sold in the US are for livestock.",
        sourceName: "FDA",
        sourceLink: "https://www.fda.gov/media/79581/download",
        category: "Humanity",
      },
      {
        text: "World population in 1812: 1 billion; 1912: 1.5 billion; 2012: 7 billion.",
        sourceName: "PBS",
        sourceLink:
          "https://www.pbs.org/wgbh/nova/interactive/human-numbers-through-time/",
        category: "Humanity",
      },
      {
        text: "70 billion farmed animals are reared annually worldwide. More than 6 million animals are killed for food every hour.",
        sourceName: "A well-fed world",
        sourceLink: "https://awellfedworld.org/factory-farms/",
        category: "Humanity",
      },
      {
        text: "We are currently growing enough food to feed 10 billion people.",
        sourceName: "Common dreams",
        sourceLink:
          "https://www.commondreams.org/views/2012/05/08/we-already-grow-enough-food-10-billion-people-and-still-cant-end-hunger",
        category: "Humanity",
      },
      {
        text: "Worldwide, at least 50% of grain is fed to livestock.",
        sourceName: "FAO",
        sourceLink: "https://www.fao.org/4/y5019e/y5019e03.htm",
        category: "Humanity",
      },
      {
        text: "82% of starving children live in countries where food is fed to animals, and the animals are eaten by western countries.",
        sourceName: "Comfortably unware",
        sourceLink:
          "http://comfortablyunaware.com/blog/the-world-hunger-food-choice-connection-a-summary/",
        category: "Humanity",
      },
      {
        text: "15x more protein can be produced on any given area of land with plants rather than cows.",
        sourceName: "Farm progress",
        sourceLink:
          "https://www.farmprogress.com/corn/usda-projects-record-corn-and-soybean-crop-in-2016",
        category: "Humanity",
      },
      {
        text: "The average American consumes 209 pounds of meat per year.",
        sourceName: "The economist",
        sourceLink:
          "https://www.economist.com/graphic-detail/2012/04/30/kings-of-the-carnivores",
        category: "Humanity",
      },
      {
        text: "Land required to feed 1 person for 1 year: Vegan: 1/6th acre; Vegetarian: 3x as much as a vegan; Meat Eater: 18x as much as a vegan.",
        sourceName: "Earth save",
        sourceLink: "https://www.earthsave.org/pdf/ofof2006.pdf",
        category: "Humanity",
      },
      {
        text: "1.5 acres can produce 37,000 pounds of plant-based food or 375 pounds of beef.",
        sourceName: "Richard A. Oppenlander",
        sourceLink:
          "https://www.barnesandnoble.com/w/food-choice-and-sustainability-richard-a-oppenlander/1117327379?ean=9781626524354",
        category: "Humanity",
      },
      {
        text: "A person whose vegan produces 50% less carbon dioxide, uses 1/11th oil, 1/13th water, and 1/18th land compared to a meat-lover for food.",
        sourceName: "Shrink That Footprint",
        sourceLink:
          "https://shrinkthatfootprint.com/food-carbon-footprint-diet/",
        category: "Humanity",
      },
      {
        text: "Each day, a vegan person saves 1,100 gallons of water, 45 pounds of grain, 30 sq ft of forested land, 20 lbs CO2 equivalent, and one animal’s life.",
        sourceName: "Peter Scarborough & others",
        sourceLink:
          "https://link.springer.com/article/10.1007/s10584-014-1169-1",
        category: "Humanity",
      },

      // LAND
      {
        text: "Livestock or livestock feed occupies 1/3 of the earth’s ice-free land.",
        sourceName: "Walsh Bryan, 29 Nov, 2006",
        sourceLink:
          "https://science.time.com/2013/12/16/the-triple-whopper-environmental-impact-of-global-meat-production/",
        category: "Land",
      },
      {
        text: "Livestock covers 45% of the earth’s total land.",
        sourceName: "Philip Thornton & others",
        sourceLink:
          "https://cgspace.cgiar.org/server/api/core/bitstreams/3156f027-c037-4836-80d3-22edc54d720e/content",
        category: "Land",
      },
      {
        text: "Animal agriculture is the leading cause of species extinction, ocean dead zones, water pollution, and habitat destruction.",
        sourceName: "Comfortably unware",
        sourceLink:
          "https://comfortablyunaware.wordpress.com/2012/06/09/biodiversity-and-food-choice-a-clarification/",
        category: "Land",
      },
      {
        text: "Livestock operations on land have created more than 500 nitrogen-flooded dead zones around the world in our oceans.",
        sourceName: "Zielinski, Sarah, Nov 20, 2014",
        sourceLink:
          "https://www.smithsonianmag.com/science-nature/ocean-dead-zones-are-getting-worse-globally-due-climate-change-180953282/",
        category: "Land",
      },
      {
        text: "The largest mass extinction in 65 million years is underway.",
        sourceName: "Ceballos & others, 4 Aug, 2014",
        sourceLink: "https://www.science.org/doi/10.1126/sciadv.1400253",
        category: "Land",
      },
      {
        text: "Nearly half of the contiguous US is devoted to animal agriculture.",
        sourceName: "Glaser & others",
        sourceLink:
          "https://www.biologicaldiversity.org/programs/public_lands/grazing/pdfs/CostsAndConsequences_01-2015.pdf",
        category: "Land",
      },
      {
        text: "1/3 of the planet is desertified, with livestock as the leading driver.",
        sourceName: "Hogan, C Michael., 1 Jan, 2006",
        sourceLink: "https://editors.eol.org/eoearth/wiki/Overgrazing",
        category: "Land",
      },

      //OCEANS
      {
        text: "We could see fishless oceans by 2048.",
        sourceName: "Worm, Boris, 3 Nov, 2006 ",
        sourceLink: "https://cdn.ioos.noaa.gov/media/2017/12/worm-et-al.pdf",
        category: "Oceans",
      },
      {
        text: "90-100 million tons of fish are pulled from our oceans each year.",
        sourceName: "FAO",
        sourceLink: "https://www.fao.org/4/i2727e/i2727e01.pdf",
        category: "Oceans",
      },
      {
        text: "As many as 2.7 trillion animals are pulled from the ocean each year.",
        sourceName: "Mood, A & Brooke, July 2010",
        sourceLink:
          "https://www.fishcount.org.uk/published/std/fishcountstudy.pdf",
        category: "Oceans",
      },
      {
        text: "For every 1 pound of fish caught, up to 5 pounds of unintended marine species are caught and discarded as bycatch.",
        sourceName: "FAO",
        sourceLink: "https://www.fao.org/4/W6602E/w6602E09.htm",
        category: "Oceans",
      },
      {
        text: "As many as 40% (63 billion pounds) of fish caught globally every year are discarded.",
        sourceName: "Keledjian, Amanda, Mar, 2014",
        sourceLink:
          "https://oceana.org/wp-content/uploads/sites/18/Bycatch_Report_FINAL.pdf",
        category: "Oceans",
      },
      {
        text: "Scientists estimate as many as 650,000 whales, dolphins, and seals are killed every year by fishing vessels.",
        sourceName: "Keledjian, Amanda, Mar, 2014",
        sourceLink:
          "https://oceana.org/wp-content/uploads/sites/18/Bycatch_Report_FINAL.pdf",
        category: "Oceans",
      },
      {
        text: "Fish catch peaks at 85 million tons.",
        sourceName: "FAO",
        sourceLink: "https://www.fao.org/4/i2727e/i2727e01.pdf",
        category: "Oceans",
      },
      {
        text: "40-50 million sharks are killed in fishing lines and nets each year.",
        sourceName: "Sharks at Risk",
        sourceLink:
          "https://awionline.org/sites/default/files/products/AWI-MA-SharksAtRiskBrochure.pdf",
        category: "Oceans",
      },

      // RAINFOREST
      {
        text: "Animal agriculture is responsible for up to 91% of Amazon destruction.",
        sourceName: "Margulis, Sergio, 2003",
        sourceLink:
          "https://documents1.worldbank.org/curated/en/758171468768828889/pdf/277150PAPER0wbwp0no1022.pdf",
        category: "Rainforest",
      },
      {
        text: "1-2 acres of rainforest are cleared every second.",
        sourceName: "Scientific American",
        sourceLink:
          "https://www.scientificamerican.com/article/earth-talks-daily-destruction/",
        category: "Rainforest",
      },
      {
        text: "The leading causes of rainforest destruction are livestock and feedcrops.",
        sourceName: "Butler, Rhett, July 2012",
        sourceLink: "https://worldrainforests.com/0812.htm",
        category: "Rainforest",
      },
      {
        text: "Up to 137 plant, animal, and insect species are lost every day due to rainforest destruction.",
        sourceName: "Vidal, John, Aug 2010",
        sourceLink:
          "https://www.theguardian.com/environment/2010/aug/16/nature-economic-security",
        category: "Rainforest",
      },
      {
        text: "136 million rainforest acres have been cleared for animal agriculture.",
        sourceName: "Rhett A. Butler, Nov 23, 2021",
        sourceLink:
          "https://worldrainforests.com/amazon/amazon_destruction.html",
        category: "Rainforest",
      },
      {
        text: "1,100 land activists have been killed in Brazil in the past 20 years.",
        sourceName: "Batty, David",
        sourceLink:
          "https://www.theguardian.com/world/2009/apr/08/brazilian-murder-dorothy-stang",
        category: "Rainforest",
      },

      // WASTE
      {
        text: "Every minute, 7 million pounds of excrement are produced by animals raised for food in the US.",
        sourceName: "USDA",
        sourceLink:
          "https://www.nrcs.usda.gov/wps/portal/nrcs/detail/null/?cid=nrcs143_014211",
        category: "Waste",
      },
      {
        text: "A farm with 2,500 dairy cows produces the same amount of waste as a city of 411,000 people.",
        sourceName: "EPA",
        sourceLink:
          "https://nepis.epa.gov/Exe/ZyNET.exe/901V0100.txt?ZyActionD=ZyDocument&Client=EPA&Index=2000%20Thru%202005&Docs=&Query=&Time=&EndTime=&SearchMethod=1&TocRestrict=n&Toc=&TocEntry=&QField=&QFieldYear=&QFieldMonth=&QFieldDay=&UseQField=&IntQFieldOp=0&ExtQFieldOp=0&XmlQuery=&File=D:%5CZYFILES%5CINDEX%20DATA%5C00THRU05%5CTXT%5C00000011%5C901V0100.txt&User=ANONYMOUS&Password=anonymous&SortMethod=h%7C-&MaximumDocuments=1&FuzzyDegree=0&ImageQuality=r75g8/r75g8/x150y150g16/i425&Display=hpfr&DefSeekPage=x&SearchBack=ZyActionL&Back=ZyActionS&BackDesc=Results%20page&MaximumPages=1&ZyEntry=1&slide",
        category: "Waste",
      },
      {
        text: "Animals generate 1.4 billion tons of waste annually, enough to cover cities like San Francisco, New York, and Tokyo.",
        sourceName: "USDA",
        sourceLink:
          "https://www.ars.usda.gov/research/programs/programs.htm?np_code=206&docid=13337",
        category: "Waste",
      },

      // WATER
      {
        text: "Fracking (hydraulic fracturing) water use ranges from 70-140 billion gallons annually.",
        sourceName: "EPA. Feb 2011",
        sourceLink:
          "https://www.epa.gov/sites/default/files/documents/HFStudyPlanDraft_SAB_020711.pdf",
        category: "Water",
      },
      {
        text: "Animal agriculture water consumption ranges from 34-76 trillion gallons annually.",
        sourceName: "US Geological Service",
        sourceLink: "https://pubs.usgs.gov/fs/2009/3098/pdf/2009-3098.pdf",
        category: "Water",
      },
      {
        text: "Agriculture is responsible for 80-90% of US water consumption.",
        sourceName: "USDA",
        sourceLink:
          "https://www.ers.usda.gov/topics/farm-practices-management/irrigation-water-use/background.aspx",
        category: "Water",
      },
      {
        text: "Californians use 1500 gallons of water per person per day. Close to Half is associated with meat and dairy products.",
        sourceName: "Fulton, Julian, 2012",
        sourceLink:
          "https://pacinst.org/wp-content/uploads/2013/02/ca_ftprint_full_report3.pdf",
        category: "Water",
      },
      {
        text: "2,500 gallons of water are needed to produce 1 pound of beef.",
        sourceName: "John Robbins",
        sourceLink: "https://www.earthsave.org/environment/water.htm",
        category: "Water",
      },
      {
        text: "477 gallons of water are required to produce 1lb. of eggs;  almost 900 gallons of water are needed for 1lb. of cheese.",
        sourceName: "EWG",
        sourceLink:
          "https://www.ewg.org/consumer-guides/ewgs-quick-tips-reducing-your-diets-climate-footprint",
        category: "Water",
      },
      {
        text: "1,000 gallons of water are required to produce 1 gallon of milk.",
        sourceName: "Arjen Y. Hoekstra",
        sourceLink:
          "https://waterfootprint.org/resources/Hoekstra-2008-WaterfootprintFood.pdf",
        category: "Water",
      },
      {
        text: "Animal Agriculture is responsible for 20%-33% of all fresh water consumption in the world today.",
        sourceName: "Gerbens-Leenes",
        sourceLink:
          "https://www.sciencedirect.com/science/article/pii/S2212371713000024",
        category: "Water",
      },

      // WILDLIFE
      {
        text: "The USDA conducts predator killing of wild animals to protect livestock.",
        sourceName: "Predator Defense",
        sourceLink: "https://www.predatordefense.org/USDA.htm",
        category: "Wildlife",
      },
      {
        text: "Washington state killed the wedge pack of wolves due to increasing beef consumption.",
        sourceName: "The Wildlife News",
        sourceLink:
          "http://www.thewildlifenews.com/2012/09/22/wedge-wolf-pack-will-be-killed-because-of-increasing-beef-consumption/",
        category: "Wildlife",
      },
      {
        text: "More wild horses and burros are in government holding facilities than are free on the range.",
        sourceName: "Bureau of Land Management",
        sourceLink:
          "https://www.blm.gov/programs/wild-horse-and-burro/about-the-program/program-data",
        category: "Wildlife",
      },
      {
        text: "10K years ago, 99% of biomass was wild animals. Today, humans & the animals we raise as food make up 98% of the zoomass.",
        sourceName: "Post Growth: From Bigger Towards Better",
        sourceLink: "https://postgrowth.org/the-bomb-is-still-ticking/",
        category: "Wildlife",
      },
    ],
  }),
  getters: {
    getNavigationCards: (state) => state.navigationCards,
    getAnimals: (state) => state.animals,
    getElapsedTime: (state) => state.elapsedTime,
  },
  actions: {
    getRandomFact() {
      const randomIndex = Math.floor(Math.random() * this.facts.length);
      return this.facts[randomIndex];
    },
    initializeStartTime() {
      if (!this.startTime) {
        this.startTime = Date.now();
      }
    },
    updateElapsedTime() {
      this.elapsedTime = Date.now() - this.startTime;
    },
    incrementAnimalCounts() {
      this.animals.forEach((animal) => {
        animal.count += animal.rate;
      });
    },
  },
});
