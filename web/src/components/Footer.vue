<template>
  <footer class="footer">
    <section-block class="contact" size="large" variant="dark">
      <div class="container">
        <AnimTransitionGroup
          class="contact__content"
          appear
          xyz="fade down ease-out-back stagger-1"
          duration="auto"
        >
          <h2 key="1" class="contact__title">
            Have a project in mind? <br />
            <strong>Let’s chat.</strong>
          </h2>
          <Button key="2" class="button button--white">Contact us</Button>
        </AnimTransitionGroup>
      </div>
    </section-block>
    <AnimTransitionGroup
      class="footer__grid container"
      xyz="fade down ease-out-back stagger-1"
      duration="auto"
    >
      <ul class="footer__links" key="1">
        <AnimTransitionGroup
          class="contact__content"
          xyz="fade down ease-out-back stagger-1"
          duration="auto"
        >
          <li key="1" class="footer__links-item"><g-link to="/">About us</g-link></li>
          <li key="2" class="footer__links-item"><g-link to="/">Services</g-link></li>
          <li key="3" class="footer__links-item"><g-link to="/">Work</g-link></li>
          <li key="4" class="footer__links-item"><g-link to="/">Blog</g-link></li>
        </AnimTransitionGroup>
      </ul>
      <ul class="footer__social" key="2">
        <AnimTransitionGroup
          class="contact__content"
          xyz="fade down ease-out-back stagger-1"
          duration="auto"
        >
          <li key="1" class="footer__links-item"><g-link to="/">Instagram</g-link></li>
          <li key="2" class="footer__links-item"><g-link to="/">Twitter</g-link></li>
          <li key="3" class="footer__links-item"><g-link to="/">LinkedIn</g-link></li>
          <li key="4" class="footer__links-item"><g-link to="/">Dribbble</g-link></li>
        </AnimTransitionGroup>
      </ul>
      <div class="footer__address" key="3">
        <AnimTransitionGroup
          class="contact__content"
          xyz="fade down ease-out-back stagger-1"
          duration="auto"
        >
          <address key="1">
            San Deigo <br />
            2292 Faraday Ave <br />
            Carlsbad, CA 92008
          </address>
        </AnimTransitionGroup>
      </div>

      <div class="footer__address" key="4">
        <AnimTransitionGroup
          class="contact__content"
          xyz="fade down ease-out-back stagger-1"
          duration="auto"
        >
          <address key="1">
            San Deigo <br />
            2292 Faraday Ave <br />
            Carlsbad, CA 92008
          </address>
        </AnimTransitionGroup>
      </div>
    </AnimTransitionGroup>
    <aside class="footer__copyright container">
      <span class="footer__copyright-text"
        >&copy; {{ new Date().getFullYear() }} Adaptia Design, LLC.</span
      >
      <ul class="footer__copyright-links">
        <li><g-link to="/">Privacy</g-link></li>
        <li><g-link to="/">Sitemap</g-link></li>
      </ul>
    </aside>
  </footer>
</template>

<script>
import Button from './Button'
import SectionBlock from './SectionBlock'
import AnimTransition from './AnimTransition'
import AnimTransitionGroup from './AnimTransitionGroup'
export default {
  components: { SectionBlock, Button, AnimTransition, AnimTransitionGroup },
}
</script>

<style lang="scss" scoped>
.footer {
  color: var(--color-white);
  background: var(--color-black);

  a {
    color: inherit;
  }
}

.contact {
  text-align: center;
  padding: rfs(12rem 0);

  button {
    margin-top: rfs(4rem);
  }
}
.contact__title {
  @include heading-1;
  color: inherit;

  strong {
    @include outline-styles;
  }
}

.footer__links,
.footer__social {
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    text-decoration: none;
  }
}
.footer__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: rfs(2rem);

  @include media('>=tablet') {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer__address {
  opacity: 0.6;
}

.footer__copyright {
  display: grid;
  grid-gap: rfs(1rem);

  padding-top: rfs(3rem);
  padding-bottom: rfs(3rem);

  @include media('>phone') {
    grid-template-columns: 1fr 1fr;
  }
}

.footer__copyright-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block;

  li {
    display: inline-block;
    margin-right: rfs(1rem);
  }

  a {
    text-decoration: none;
  }
}
</style>