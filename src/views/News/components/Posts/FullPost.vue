<script setup lang="ts">
import PostContainer from '@/components/fullPost/PostContainer.vue';
import PostTitle from '@/components/fullPost/PostTitle.vue';
import PostInfo from '@/components/fullPost/PostInfo.vue';
import PostGallery from '@/components/fullPost/PostGallery.vue';
import PostSubtitle from '@/components/fullPost/PostSubtitle.vue';
import PostHtmlContent from '@/components/fullPost/PostHtmlContent.vue';
import { useLoadMorePosts } from './FullPost.service';

import { useRouter } from 'vue-router';
import CustomSpinner from '@/components/CustomSpinner.vue';

const { postData, isLoading, loadMorePost } = useLoadMorePosts();

const router = useRouter();
</script>

<template>
  <div class="drop-shadow-lg">
    <CustomSpinner v-if="isLoading" />
    <PostContainer v-for="post in postData" :key="post.id">
      <div class="wrapper">
        <div class="flex flex-wrap">
          <figure class="img">
            <v-img class="rounded-lg" :aspect-ratio="1" :src="post.prevImage" cover></v-img>
          </figure>
          <div class="postContent">
            <RouterLink
              :to="{ path: `${encodeURI('/Пресс-центр/Новости')}/${post.title}` }"
              @click="
                router.push({
                  path: `${encodeURI('/Пресс-центр/Новости')}/${post.title}`,
                  query: { id: post.id },
                })
              "
            >
              <PostTitle :title="post.title" />
            </RouterLink>
            <v-divider></v-divider>
            <PostInfo :tags="post.tags" :createdAt="post.createdAt" />
            <PostSubtitle :subtitle="post.subtitle" />
            <PostHtmlContent :content="post.content" />
            <PostGallery :imgs="post.contentimgs" />
          </div>
        </div>
      </div>
    </PostContainer>
    <div v-intersection="loadMorePost"></div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: inline;
}
.img {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  margin-right: 20px;
  margin-bottom: 10px;
}

.postContent {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}
</style>
