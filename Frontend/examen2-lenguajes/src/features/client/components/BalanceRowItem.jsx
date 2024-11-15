export const BalanceRowItem = ({balance}) => {
    return (
      <tr key={balance.id} className="hover:bg-gray-50">
          <td className="px-4 py-2 border-b">{balance.accountCode}</td>
          <td className="px-4 py-2 border-b">{balance.accountName}</td>
          <td className="px-4 py-2 border-b">{balance.month}</td>
          <td className="px-4 py-2 border-b">{balance.year}</td>
          <td className="px-4 py-2 border-b">{balance.balanceAmount}</td>
      </tr>
    )
  }