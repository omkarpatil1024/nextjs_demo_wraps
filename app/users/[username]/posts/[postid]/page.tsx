"use client";

import React from 'react';
import { use } from 'react';

const fetchUserData = async (params: { username: string; postid: string }) => {
  // Simulate an API call
  return new Promise<{ username: string; postid: string; title: string }>((resolve) => {
    setTimeout(() => {
      resolve({
        ...params,
        title: `Post ${params.postid} by ${params.username}`
      });
    }, 1000);
  });
};

export default function Post({ params }: { params: { username: string; postid: string } }) {
  // Using the use hook to unwrap the Promise
  const postData = use(fetchUserData(params));
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Post Details</h1>
      <div className="space-y-2">
        <p><span className="font-semibold">Username:</span> {postData.username}</p>
        <p><span className="font-semibold">Post ID:</span> {postData.postid}</p>
        <p><span className="font-semibold">Title:</span> {postData.title}</p>
      </div>
    </div>
  );
}