// src/components/RecentMessages.tsx
import React from 'react';

const RecentMessages: React.FC = () => {
  return (
    <div className="flex flex-col rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-card-foreground-light dark:text-card-foreground-dark">Recent Messages</h2>
        <a className="text-sm font-medium text-primary hover:underline" href="#">Go to Inbox</a>
      </div>
      <div className="flex flex-col gap-4">
        {/* Message Item */}
        <div className="flex items-start gap-3">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 shrink-0" data-alt="Doctor avatar" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_AKvDlnEuLBNj3F99axRj3mUUZLDSKqfFz3_7h8zSXZWZHQZXcOzLR1utk2siGlU-z9gndByVQB_HaEm1iPNuf02u3I8HddN_hV3sL9usIgahz5WNaCDvmsididJSl0v1Xp0B9uNicTq7qpehlYK7b7guaYSDKZC-YhipUCGGCu4dnt3rSni4mXW415tknXia92sZ0KtQs1rCLJUvvG9dNWY3KoBRbLqrX9_JG4WIXYrH_MJHRQ8TF6Y-Fk28EXrmIAhKXXCVct0")'}}></div>
          <div className="flex-1">
            <p className="text-sm font-medium text-card-foreground-light dark:text-card-foreground-dark">Dr. Evelyn Reed</p>
            <p className="text-sm text-muted-light dark:text-muted-dark line-clamp-2">Follow up on your recent visit. Hi Sarah, just wanted to check in...</p>
          </div>
          <div className="size-2 rounded-full bg-primary mt-1.5"></div>
        </div>
        {/* Message Item */}
        <div className="flex items-start gap-3">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 shrink-0" data-alt="Doctor avatar" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnxjawOWjOUntfZqQccPJLCRlsbLeajqwReiiwQAeXo587WiUiX01sUDCFssJttEXmkFuuZz6zKWmjmTv1w2UYF2QZGq982pZJqQdzN6g5rx_ElRCBNlK4fmWxxpouP5o6aLU4Qnk2tomXzPys4HGtlDVN0arzknbBjz3QdEMUv1PPGCuSh11N3R6-49zjMxp_QhXDGv1epMrm6XH-h666NE6gPgwPtOCiba6-Xy9FI12cEAqlkBwKneLD95x0VRbex0hoCqU4IjI")'}}></div>
          <div className="flex-1">
            <p className="text-sm font-medium text-card-foreground-light dark:text-card-foreground-dark">Dr. James Carter</p>
            <p className="text-sm text-muted-light dark:text-muted-dark line-clamp-2">Regarding your prescription renewal. Please let me know if you need...</p>
          </div>
          <div className="size-2 rounded-full bg-primary mt-1.5"></div>
        </div>
      </div>
    </div>
  );
};

export default RecentMessages;
