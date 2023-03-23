<script setup>


</script>

<template>

        <div class="testimonials">
          <div class="card card--bg-purple">
            <header class="card__header">
              <img src="src/assets/img/image-daniel.jpg" class="card__img" alt="" />
              <div>
                <h3>Daniel Clifford</h3>
                <p>Verified Graduate</p>
              </div>
            </header>
            <p class="card__lead">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel I
              got every penny's worth.
            </p>
            <p class="card__quote">
              "I was an EMT for many years before I joined the bootcamp. I've been
              looking to make a transition and have heard some people who had an
              amazing experience here. I signed up for the free intro course and
              found it incredibly fun! I enrolled shortly thereafter. The next 12
              weeks was the best - and most grueling - time of my life. Since
              completing the course, I've successfully switched careers, working as
              a Software Engineer at a VR startup."
            </p>
          </div>

          <div class="card card--bg-gray-blue">
            <header class="card__header">
              <img src="src/assets/img/image-jonathan.jpg" class="card__img" alt="" />
              <div>
                <h3>Jonathan Walters</h3>
                <p>Verified Graduate</p>
              </div>
            </header>
            <p class="card__lead">
              The team was very supportive and kept me motivated
            </p>
            <p class="card__quote">
              "I started as a total newbie with virtually no coding skills. I now
              work as a mobile engineer for a big company. This was one of the best
              investments I've made in myself."
            </p>
          </div>
          <div class="card card--bg-gray-blue">
            <header class="card__header">
              <img src="src/assets/img/image-jonathan.jpg" class="card__img" alt="" />
              <div>
                <h3>Jonathan Walters</h3>
                <p>Verified Graduate</p>
              </div>
            </header>
            <p class="card__lead">
              The team was very supportive and kept me motivated
            </p>
            <p class="card__quote">
              "I started as a total newbie with virtually no coding skills. I now
              work as a mobile engineer for a big company. This was one of the best
              investments I've made in myself."
            </p>
          </div>

    </div>
    

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@200;300;400;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

main {
  background: #edf2f8;
  font-family: 'Barlow Semi Condensed', sans-serif;
  line-height: 1.7;
  font-size: 13px;

}

.testimonials {
  max-width: 1440px;
  margin: 100px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.card {
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  margin-bottom: 10px;
}

.card__header {
  display: flex;
  background-color: transparent;
  border:0;
  align-items: center;
  margin-bottom: 10px;
}

.card__header h3 {
  font-size: 15px;
}

.card__header p {
  opacity: 50%;
}

.card__img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #996ed9;
  margin-right: 10px;
}

.card__lead {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 20px;
}

.card__quote {
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  opacity: 70%;
}

.card--bg-purple {
  background: hsl(263, 55%, 52%);
  color: #fff;
  background-image: url('@/assets/img/bg-pattern-quotation.svg');
  background-repeat: no-repeat;
  background-position: top 10px right 100px;
}

.card--bg-gray-blue {
  background: hsl(217, 19%, 35%);
  color: #fff;
}

.card--bg-black-blue {
  background: hsl(219, 29%, 14%);
  color: #fff;
}

.card:nth-of-type(1) {
  grid-column: 1 / 3;
}

.card:nth-of-type(4) {
  grid-column: 2 / 4;
  grid-row: 2;
}

.card:nth-of-type(5) {
  grid-column: 4;
  grid-row: 1 / 3;
}

footer {
  text-align: center;
}

@media (max-width: 768px) {
  .testimonials {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .card:nth-of-type(1) {
    grid-column: 1;
  }

  .card:nth-of-type(4) {
    grid-column: 1;
    grid-row: 4;
  }

  .card:nth-of-type(5) {
    grid-column: 1;
    grid-row: 5;
  }
}

</style>
 