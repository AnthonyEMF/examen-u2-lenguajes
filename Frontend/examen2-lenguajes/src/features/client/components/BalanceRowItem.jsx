import { getMonthName } from "../../../shared/utils/format-date"

export const BalanceRowItem = ({balance}) => {
  return (
    <tr key={balance.id} className="hover:bg-gray-50">
        <td className="px-4 py-2 border-b">{balance.id}</td>
        <td className="px-4 py-2 border-b">{getMonthName(balance.month)}</td>
        <td className="px-4 py-2 border-b">{balance.year}</td>
        <td className="px-4 py-2 border-b">{balance.accountName}</td>
        <td className="px-4 py-2 border-b text-blue-700">${balance.balanceAmount}</td>
    </tr>
  )
}

