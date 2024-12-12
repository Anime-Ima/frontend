# 1. PostgreSQL (Relational DB) Use Cases

### User Data:
- **User profiles**: Names, email addresses, hashed passwords, and profile metadata.
- **Preferences and settings**: Theme, notifications, and privacy controls.

### Transactional Data:
- **Payments and purchases**: Order history, subscriptions, and billing records.
- **Interactions requiring consistency**: Following a user, sending friend requests, or tracking "likes"  
  where order and accuracy matter.

### Relationships:
- **User-to-User**: Friendships, followers, and relationships (e.g., `follows` table with foreign keys).
- **Content-to-User**: Ownership of posts, comments, or media.
- **Complex joins**: Pulling data that involves multiple related tables  
  (e.g., "show posts from users I follow").

### Analytics and Aggregations:
- **User metrics**: User growth, active users, and retention rates.
- **Aggregated values**: Total likes, shares, or repost counts.
- **Historical reporting**: Keeping structured records for audits or reports.

### System Configuration:
- **Admin controls and roles**: Permissions, role-based access control (RBAC).
- **Audit trails**: Logging sensitive changes to critical tables (e.g., account updates).
<br><br>

---


# 2. Non-Relational Databases (NoSQL) Use Cases


### Content Management:
- **Posts and media**: Store dynamic or evolving post data, including text, images, and video links.
- **Comments**: Nested or hierarchical comments are more easily handled in NoSQL.
- **Reactions**: Likes, upvotes, and custom reactions (e.g., emojis) that may vary in structure.

### Caching (In-Memory Databases like Redis or Memcached):
- **User feeds**: Pre-computed or cached feeds for faster retrieval.
- **Frequently queried data**: Post like counts, comment counts, or leaderboard stats.
- **Temporary data**: API rate-limiting tokens, temporary flags, or user login attempts.

### Real-Time Analytics and Events:
- **Event streams**: Logging user activity like clicks, impressions, and actions.
- **Real-time dashboards**: Metrics for monitoring app performance or user activity.
- **Search and retrieval**: Use Elasticsearch for searching large datasets (e.g., posts or users).

### User Sessions and Ephemeral Data:
- **Session tokens**: Temporary data to maintain user sessions.
- **Chat or messaging**: Temporary storage for real-time chats before archiving.
- **Notifications**: Queuing unread messages or alerts for faster delivery.

### Logs and Monitoring:
- **Error logs**: Centralized error tracking for application debugging.
- **User activity**: Track login attempts, content uploads, or account updates.
- **System events**: Store audit or operational logs for performance monitoring.

### Scalable Storage for High-Volume Data:
- **Large media references**: Store URLs or metadata for images/videos.
- **Time-series data**: Event timestamps or metrics (e.g., views per second).
- **Data that changes often**: Profile activity status, like "online" or "last seen."

### Dynamic Schema Use Cases:
- **Custom user fields**: Allow users to store optional, dynamic data like bio links or tags.
- **App feature experiments**: A/B testing or feature flags that evolve over time.
