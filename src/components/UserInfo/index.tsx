import React from 'react';
import type { User } from '../../types';
import { formatDate } from '../../utils';

import locationIcon from '../../assets/icon-location.svg';
import twitterIcon from '../../assets/icon-twitter.svg';
import blogIcon from '../../assets/icon-website.svg';
import companyIcon from '../../assets/icon-company.svg';

import './index.scss';

const NotAvailable = () => <span className="text-muted">Not Available</span>;

function UserInfo({ user }: { user: User }) {
  const name = user.name || user.login?.substring(1) || '';

  const username = user.login ? `@${user.login}` : '';

  const joinedDate = formatDate(user.created_at);

  const companyUrl = user.company
    ? `https://github.com/${user.company.replace(/^@/, '')}`
    : '';

  const avatarUrl = user.avatar_url;

  return (
    <div className="user-info">
      <div className="user-info__avatar">
        {avatarUrl ? <img src={avatarUrl} /> : ''}
      </div>

      <div>
        <div>
          <div className="user-info__header">
            <h1>{name}</h1>
            <span>joined {joinedDate}</span>
          </div>

          <h3>
            <a href={user.html_url}>{username}</a>
          </h3>
        </div>
        <div className={`user-info__bio ${!user.bio ? 'text-muted' : ''}`}>
          {user.bio || 'This profile has no bio'}
        </div>

        <div className="user-info__activites">
          <div>
            <div>Repos</div>
            <h4>{user.public_repos}</h4>
          </div>

          <div>
            <div>Followers</div>
            <h4>{user.followers}</h4>
          </div>

          <div>
            <div>Following</div>
            <h4>{user.following}</h4>
          </div>
        </div>
        <div className="user-info__links">
          <div className="user-info__links_item">
            <img src={locationIcon} />
            {user.location || <NotAvailable />}
          </div>

          <div className="user-info__links_item">
            <img src={twitterIcon} />
            {user.twitter_username || <NotAvailable />}
          </div>

          <div className="user-info__links_item">
            <img src={blogIcon} />
            {user.blog ? <a href={user.blog}>{user.blog}</a> : <NotAvailable />}
          </div>

          <div className="user-info__links_item">
            <img src={companyIcon} />
            {user.company ? (
              <a href={companyUrl}>{user.company}</a>
            ) : (
              <NotAvailable />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
