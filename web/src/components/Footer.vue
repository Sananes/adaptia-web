<template>
  <footer class="footer">
    <section-block class="contact" size="large" variant="dark">
      <div class="container">
        <XyzTransitionGroup
          appear-visible
          class="contact__content"
          appear
          xyz="fade down ease-out-back stagger-1"
          duration="auto"
        >
          <h2 key="1" class="contact__title">
            Have a project in mind? <br />
            <strong>Let’s chat.</strong>
          </h2>
          <Button
            :link="true"
            href="mailto:hello@adaptiadesign.com"
            key="2"
            class="button button--white"
          >
            Contact us
          </Button>
        </XyzTransitionGroup>
      </div>
    </section-block>
    <XyzTransitionGroup
      appear-visible
      class="footer__grid container"
      xyz="fade down ease-out-back stagger-1"
      duration="auto"
    >
      <!-- <ul class="footer__links" key="1">
        <XyzTransitionGroup
          appear-visible
          class="contact__content"
          xyz="fade down ease-out-back stagger-1"
          duration="auto"
        >
          <li key="1" class="footer__links-item"><g-link to="/">About us</g-link></li>
          <li key="2" class="footer__links-item"><g-link to="/">Services</g-link></li>
          <li key="3" class="footer__links-item"><g-link to="/">Work</g-link></li>
          <li key="4" class="footer__links-item"><g-link to="/">Blog</g-link></li>
        </XyzTransitionGroup>
      </ul> -->
      <ul class="footer__social" key="2">
        <XyzTransitionGroup
          appear-visible
          class="contact__content"
          xyz="fade down ease-out-back stagger-1"
          duration="auto"
        >
          <li key="1" class="footer__links-item">
            <a href="https://www.instagram.com/adaptia/">Instagram</a>
          </li>
          <li key="2" class="footer__links-item">
            <a href="https://www.facebook.com/adaptiadesign">Facebook</a>
          </li>
          <li key="3" class="footer__links-item">
            <a href="https://www.linkedin.com/company/adaptia/">LinkedIn</a>
          </li>
        </XyzTransitionGroup>
      </ul>
      <div class="footer__address" key="3">
        <XyzTransitionGroup
          appear-visible
          class="contact__content"
          xyz="fade down ease-out-back stagger-1"
          duration="auto"
        >
          <address key="1">
            San Deigo <br />
            2292 Faraday Ave <br />
            Carlsbad, CA 92008
          </address>
        </XyzTransitionGroup>
      </div>

      <!-- <div class="footer__address" key="4">
        <XyzTransitionGroup
          appear-visible
          class="contact__content"
          xyz="fade down ease-out-back stagger-1"
          duration="auto"
        >
          <address key="1">
            San Deigo <br />
            2292 Faraday Ave <br />
            Carlsbad, CA 92008
          </address>
        </XyzTransitionGroup>
      </div> -->
    </XyzTransitionGroup>
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
export default {
  components: { SectionBlock, Button }
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
}

.contact__content .button {
  display: inline-block;
  margin-top: rfs(4rem);
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
    grid-template-columns: repeat(2, 1fr);
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
