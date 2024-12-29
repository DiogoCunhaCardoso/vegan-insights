<template>
  <Hero
    heading="Everyday a vegan saves: 1 animal life, 4.164 liters of water, 18 kg of grain, 3 m² of forest land, 9 kg C0₂"
    source="Cowspiracy"
    link="https://www.cowspiracy.com/facts"
  />

  <div
    class="flex flex-col justify-center md:flex-row gap-4 mt-16 lg:mt-28 max-w-[420px] lg:max-w-none mx-auto"
  >
    <div class="bg-foreground-dark p-6 rounded-lg">
      <p class="text-text text-lg font-semibold mb-4">I am Vegan for:</p>

      <!-- Unit Toggle Buttons -->
      <div class="bg-foreground-dark rounded-md mb-12 w-fit flex gap-2">
        <StyledButton
          label="Metric"
          :isActive="unit === 'metric'"
          @toggle="setUnit('metric')"
        />
        <StyledButton
          label="Imperial"
          :isActive="unit === 'imperial'"
          @toggle="setUnit('imperial')"
        />
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 min-w-64">
        <Input v-model="inputs.days" :max="31" label="days" />
        <Input v-model="inputs.months" :max="12" label="months" />
        <Input v-model="inputs.years" :max="100" label="years" />

        <!-- Submit Button -->
        <input
          type="submit"
          value="Vegan Impact"
          class="bg-[#fc81b2] text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-accent-dark transition duration-300 custom-cursor"
        />
      </form>
    </div>

    <!-- Saved Stats Section -->
    <div
      ref="savedStatsSection"
      class="bg-foreground-dark w-full flex justify-center flex-col items-center p-6 rounded-lg min-w-64"
    >
      <p class="text-text text-lg font-semibold mb-4">You saved:</p>
      <div
        v-for="stat in savedStats"
        :key="stat.text"
        class="flex items-center gap-3 mb-4"
      >
        <img :src="stat.icon" :alt="stat.text" class="w-5 h-5" />
        <p class="text-text">
          <span class="font-semibold">{{ stat.result }}</span> {{ stat.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Input from "@/components/Input.vue";
import StyledButton from "@/components/StyledButton.vue";
import LifeIcon from "@/assets/calculator/heart.svg";
import WaterIcon from "@/assets/calculator/water.svg";
import GrainIcon from "@/assets/calculator/grain.svg";
import ForestIcon from "@/assets/calculator/forest.svg";
import CoTwoIcon from "@/assets/calculator/co2.svg";

export default {
  components: {
    Hero,
    Input,
    StyledButton,
  },
  data() {
    return {
      unit: "metric",
      inputs: {
        days: 0,
        months: 0,
        years: 0,
      },
      savedStats: [
        { icon: LifeIcon, text: "animal lives", result: 0 },
        { icon: WaterIcon, text: "liters of water", result: 0 },
        { icon: GrainIcon, text: "kg of grain", result: 0 },
        { icon: ForestIcon, text: "m² of forest land", result: 0 },
        { icon: CoTwoIcon, text: "kg of CO2", result: 0 },
      ],
    };
  },
  methods: {
    setUnit(unit) {
      this.unit = unit;
    },
    calculateImpact() {
      const totalDays =
        Number(this.inputs.days) +
        Number(this.inputs.months) * 30 +
        Number(this.inputs.years) * 365;

      const factors = {
        animalLives: 1,
        water: 4164,
        grain: 18,
        forestLand: 3,
        co2: 9,
      };

      const conversionFactors = {
        water: 0.264172,
        grain: 2.20462,
        forestLand: 10.7639,
        co2: 2.20462,
      };

      const round = (value) => Number(value.toFixed(0));

      this.savedStats = [
        {
          icon: LifeIcon,
          text: "animal lives",
          result: round(totalDays * factors.animalLives),
        },
        {
          icon: WaterIcon,
          text:
            this.unit === "imperial" ? "gallons of water" : "liters of water",
          result: round(
            totalDays *
              factors.water *
              (this.unit === "imperial" ? conversionFactors.water : 1)
          ),
        },
        {
          icon: GrainIcon,
          text: this.unit === "imperial" ? "lbs of grain" : "kg of grain",
          result: round(
            totalDays *
              factors.grain *
              (this.unit === "imperial" ? conversionFactors.grain : 1)
          ),
        },
        {
          icon: ForestIcon,
          text:
            this.unit === "imperial"
              ? "ft² of forest land"
              : "m² of forest land",
          result: round(
            totalDays *
              factors.forestLand *
              (this.unit === "imperial" ? conversionFactors.forestLand : 1)
          ),
        },
        {
          icon: CoTwoIcon,
          text: this.unit === "imperial" ? "lbs of CO2" : "kg of CO2",
          result: round(
            totalDays *
              factors.co2 *
              (this.unit === "imperial" ? conversionFactors.co2 : 1)
          ),
        },
      ];
    },
    handleSubmit() {
      this.calculateImpact();
      if (window.innerWidth < 767) {
        this.scrollToSavedStats();
      }
    },
    scrollToSavedStats() {
      const section = this.$refs.savedStatsSection;
      section.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
