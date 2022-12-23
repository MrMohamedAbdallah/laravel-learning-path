<script setup>
import data from '~/static/json/data.json';

const keys = Object.keys(data);

</script>

<template>
  <div v-for="key in keys">
    <h1>{{ data[key].title }}</h1>
    <table>
      <thead>
        <tr>
          <th>Topic</th>
          <th>Docs</th>
          <th>Videos</th>
          <th>Articles</th>
          <th>Tests</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="topic in data[key].data">
          <td>{{ topic.topic }}</td>
          <td>
            <template v-if="topic.docs && topic.docs">
              <ul>
                <li v-for="links in topic.docs">
                  <a :href="links.url" target="_blank">{{ links.title }}</a>
                </li>
              </ul>
            </template>
          </td>
          <td>
            <template v-if="topic.videos && topic.videos">
              <ul>
                <li v-for="links in topic.videos">
                  <a :href="links.url" target="_blank">{{ links.title }}</a>
                </li>
              </ul>
            </template>
          </td>
          <td>
            <template v-if="topic.articles && topic.articles">
              <ul>
                <li v-for="links in topic.articles">
                  <a :href="links.url" target="_blank">{{ links.title }}</a>
                </li>
              </ul>
            </template>
          </td>
          <td>
            <template v-if="topic.tests && topic.tests">
              <ul>
                <li v-for="links in topic.tests">
                  <a :href="links.url" target="_blank">{{ links.title }}</a>
                </li>
              </ul>
            </template>
          </td>
        </tr>
      </tbody>
    </table>

    <hr style="margin: 50px 0px;">
  </div>
</template>
