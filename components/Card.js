export default function Card({ title, value }) {
    return (
      <div className="bg-white shadow-md p-4 rounded-md">
        <h4 className="text-gray-500">{title}</h4>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    );
  }
  