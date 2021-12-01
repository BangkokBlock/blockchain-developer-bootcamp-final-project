### The following are two desgin patterns used in the construction of the project

#### Inter-Contract Execution (Calling functions in external contracts) Inter-Contract Execution.

#### Inheritance and Interfaces (Importing and extending contracts and/or using contract interfaces) Inheritances and Interfaces 
More specifically this inclues a number of inherited contracts from Open Zeppelin... ERC721, ERC165, ReentrancyGuard, Counters, ERC721URIStorage, and a number of others. Interfaces include IERC721, IERC165, IERCMetadata, IERC20, and more.

###  Optimizing Gas (Creating more efficient Solidity code) Optimizing Gas. 
There were a number of places I incorporated optimizing gas techniques, most notably using mapping instead of arrays, memory versus storage, and inheritance (C3 Linerization).

