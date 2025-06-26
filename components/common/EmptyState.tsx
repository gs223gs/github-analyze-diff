interface EmptyStateProps {
  message: string;
  icon?: React.ReactNode;
  className?: string;
}

export function EmptyState({ 
  message, 
  icon,
  className = "" 
}: EmptyStateProps) {
  return (
    <div className={`text-center py-20 ${className}`}>
      {icon && (
        <div className="mb-4 flex justify-center">
          {icon}
        </div>
      )}
      <p className="text-gray-600 dark:text-gray-300 text-lg">
        {message}
      </p>
    </div>
  );
} 