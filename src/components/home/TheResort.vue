<script setup>
import { useHomepageStore } from '../../stores/homepage'

const theStayData = useHomepageStore().homepage.components[1]
</script>

<template>
  <section 
    class="theResort section block-card-section bg-vanilla bg-image-section-one reveal section___container" 
    style="margin-top: 0px; margin-bottom: 0px"
    data-v-3c5fc44e
  >
    <div class="q-container container-inner" data-v-3c5fc44e>
      <div class="columns block-card-shadow" data-v-3c5fc44e>
        <div class="column is-7 block-picture" data-v-3c5fc44e>
          <figure class="picture" style="height: 650px;" data-v-3c5fc44e>
            <div 
              data-scroll data-scroll-speed="-1"
              style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -5.02, 0, 1);" 
              class="box wide" 
              data-v-3c5fc44e
            ></div>
            <div 
              class="rev_clip" 
              style="clip-path: inset(0px); opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"
              data-v-3c5fc44e
            >
              <!-- <img 
                src="https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/homepage/15843368292441/big/0a92d769-ae4f-4a86-b5d6-67fbb4bc4472.jpg" alt="" 
                data-scroll data-scroll-speed="-0.95" 
                class="clip_image" 
                style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -2.1565, 0, 1); height: 715px; width: auto;"
                data-v-3c5fc44e
              > -->
              <img 
                :src="`${theStayData.model.featured.aws_file_url}/${theStayData.model.featured.path}/${theStayData.model.featured.filename.medium}`"
                data-scroll data-scroll-speed="-0.95" 
                class="clip_image" 
                style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -2.1565, 0, 1); height: 715px; width: auto;"
                data-v-3c5fc44e
              >
            </div>
          </figure>
        </div>
        <div class="column is-5 block-entry" data-v-3c5fc44e>
          <div class="inner" data-v-3c5fc44e>
            <h1 
              class="section-headline rev_item" 
              style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"
              data-v-3c5fc44e
            >
              <span class="q_split" data-v-3c5fc44e>
                <span class="q_split_wrap rev_item" data-v-3c5fc44e>
                  THE<br>RESORT
                  <!-- {{ theStayData.model.title }} -->
                </span>
              </span>
            </h1>
            <div class="rev_item" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);" data-v-3c5fc44e>
              {{ theStayData.model.description }}
            </div>
            <div class="rev_item" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);" data-v-3c5fc44e>
              <a href="#" class="inline-link q_magnet" style="transform: translate(0px, 0px);" data-v-3c5fc44e>
                {{ theStayData.model.link.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>